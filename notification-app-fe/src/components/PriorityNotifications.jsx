import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function PriorityNotifications({ notifications }) {
  return (
    <Card
      sx={{
        mb: 4,
        backgroundColor: "#1e1e1e",
        color: "white",
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Priority Notifications
        </Typography>

        {notifications &&
          notifications.map((notification, index) => (
            <Typography
              key={index}
              sx={{ mt: 1 }}
            >
              {index + 1}. {notification.message}
            </Typography>
          ))}
      </CardContent>
    </Card>
  );
}

export default PriorityNotifications;