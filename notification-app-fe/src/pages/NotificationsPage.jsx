import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";

import { useState, useEffect } from "react";

import NotificationCard from "../components/NotificationCard";
import PriorityNotifications from "../components/PriorityNotifications";
import { getTopNotifications } from "../utils/priorityCalculator";
import { getNotifications } from "../services/notificationService";

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await getNotifications();
        setNotifications(data);
      } catch (err) {
        setError("Failed to load notifications");
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, []);

  const priorityNotifications =
    getTopNotifications(notifications);

  const filteredNotifications = notifications.filter(
    (notification) =>
      (filter === "All" ||
        (filter === "Unread" && !notification.read) ||
        notification.type === filter) &&
      notification.message
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4, color: "white" }}>
      <Typography variant="h3" gutterBottom>
        Notification Center
      </Typography>

      <PriorityNotifications
        notifications={priorityNotifications}
      />

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
          flexWrap: "wrap",
        }}
      >
        <Button
          variant={filter === "All" ? "contained" : "outlined"}
          onClick={() => setFilter("All")}
        >
          ALL ({notifications.length})
        </Button>

        <Button
          variant={filter === "Unread" ? "contained" : "outlined"}
          onClick={() => setFilter("Unread")}
        >
          UNREAD (
          {notifications.filter((n) => !n.read).length})
        </Button>

        <Button
          variant={
            filter === "Placement"
              ? "contained"
              : "outlined"
          }
          onClick={() => setFilter("Placement")}
        >
          PLACEMENT (
          {
            notifications.filter(
              (n) => n.type === "Placement"
            ).length
          }
          )
        </Button>

        <Button
          variant={
            filter === "Result"
              ? "contained"
              : "outlined"
          }
          onClick={() => setFilter("Result")}
        >
          RESULT (
          {
            notifications.filter(
              (n) => n.type === "Result"
            ).length
          }
          )
        </Button>

        <Button
          variant={
            filter === "Event"
              ? "contained"
              : "outlined"
          }
          onClick={() => setFilter("Event")}
        >
          EVENT (
          {
            notifications.filter(
              (n) => n.type === "Event"
            ).length
          }
          )
        </Button>
      </Box>

      <Typography variant="h5" sx={{ mb: 2 }}>
        Notifications
      </Typography>

      <TextField
        fullWidth
        label="Search notifications"
        sx={{ mb: 3 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : filteredNotifications.length === 0 ? (
        <Typography align="center">
          No notifications found
        </Typography>
      ) : (
        filteredNotifications.map((notification, index) => (
          <NotificationCard
            key={index}
            type={notification.type}
            message={notification.message}
            time={notification.time}
            read={notification.read}
          />
        ))
      )}
    </Container>
  );
}

export default NotificationsPage;