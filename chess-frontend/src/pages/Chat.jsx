import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

// ✅ Initialize socket only once
const socket = io("http://localhost:5000", {
  autoConnect: false,
});

const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
  const [selectedUser, setSelectedUser] = useState("");
  const bottomRef = useRef(null);

  // ✅ Scroll to bottom when messages update
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (userId) {
      socket.connect();
      socket.emit("joinChat", userId);
      console.log("✅ Connected and joined chat as:", userId);
    }

    // ✅ Fetch users on load
    axios.get("http://localhost:5000/api/users")
      .then((res) => {
        setUsers(res.data);
        console.log("✅ Users fetched:", res.data);
      })
      .catch((err) => console.error("❌ Error fetching users:", err));

    // ✅ Socket listeners
    socket.on("updateUsers", (userList) => {
      console.log("🔄 Users updated:", userList);
      setUsers((prev) => [...new Set([...prev, ...userList])]);
    });

    socket.on("receiveMessage", (data) => {
      if (
        (data.receiver === userId || data.sender === userId) &&
        (data.sender === selectedUser || data.receiver === selectedUser)
      ) {
        setMessages((prev) => [...prev, data]);
      }
    });

    socket.on("invitePlayer", ({ fromUser }) => {
      if (window.confirm(`${fromUser} invited you to play! Accept?`)) {
        navigate("/");
      }
    });

    return () => {
      socket.disconnect();
      socket.off("receiveMessage");
      socket.off("updateUsers");
      socket.off("invitePlayer");
      console.log("❌ Disconnected from socket");
    };
  }, [userId, selectedUser, navigate]);

  // ✅ Fetch chat history when selectedUser changes
  useEffect(() => {
    if (selectedUser && userId) {
      axios.get(`http://localhost:5000/api/messages/${userId}/${selectedUser}`)
        .then((res) => {
          setMessages(res.data);
          console.log("📜 Chat history loaded:", res.data);
        })
        .catch((err) => console.error("❌ Error fetching chat history:", err));
    }
  }, [userId, selectedUser]);

  const sendMessage = async () => {
    if (!message.trim() || !selectedUser) {
      alert("Please select a user and type a message.");
      return;
    }

    const newMessage = {
      sender: userId,
      receiver: selectedUser,
      text: message,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/messages", newMessage);
      console.log("✅ Message saved:", response.data);

      socket.emit("sendMessage", newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
    } catch (error) {
      console.error("❌ Error sending message:", error);
    }
  };

  const invitePlayer = () => {
    if (!selectedUser) {
      alert("Please select a user to invite.");
      return;
    }
    socket.emit("invitePlayer", { fromUser: userId, toUser: selectedUser });
    alert(`Game invite sent to ${selectedUser}`);
  };

  return (
    <div style={{
      display : 'flex',
      flexWrap : 'wrap',
      justifyContent : 'space-around',
      flexDirection : 'row-reverse'
    }}>
      <div>
        {/* <h2>💬 Chat System</h2> */}

        <h3>🟢 Registered Users</h3>
          <div style={{
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            maxHeight: "300px", // Adjust height as needed
            padding: "20px",
            gap: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            scrollSnapType: "y mandatory",
            width : '18em',
          }}>
            {users.map((user) => (
              <div
                key={user._id}
                style={{
                  scrollSnapAlign: "start",
                  fontWeight: user._id === selectedUser ? "bold" : "normal",
                  backgroundColor: user._id === selectedUser ? "#e6f0ff" : "white",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
              >
                <p style={{ marginBottom: "5px" }}>{user.username}<br />({user.email})</p>
                {user._id !== userId && (
                  <button
                    onClick={() => setSelectedUser(user._id)}
                    style={{ marginTop: "5px" }}
                  >
                    Chat
                  </button>
                )}
              </div>
            ))}
          </div>


      </div>


      <div style={{
        marginRight : '20px'
      }}>
        <h3>💬 Chat with: {selectedUser || "No user selected"}</h3>
        <div style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          height: "100px",
          overflowY: "auto",
          backgroundColor: "#fafafa",
          marginBottom: "10px",
          }}>
          {messages.map((msg, index) => (
            <p key={index} style={{ color: msg.sender === userId ? "#007bff" : "#333" }}>
              <strong>{msg.sender === userId ? "You" : msg.sender}:</strong> {msg.text}
            </p>
            ))}
          <div ref={bottomRef} />
        </div>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
          disabled={!selectedUser}
          style={{ width: "70%", padding: "8px", marginRight: "10px" }}
        />
        <button onClick={sendMessage} disabled={!selectedUser}>Send</button>

        <div style={{ marginTop: "20px" }}>
          <button onClick={invitePlayer} disabled={!selectedUser}>🎮 Send Game Invite</button>
          <button onClick={() => navigate("/dashboard")} style={{ marginLeft: "10px" }}>
            🔙 Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
