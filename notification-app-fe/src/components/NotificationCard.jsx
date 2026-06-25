import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";

function NotificationCard({
  type,
  message,
  time,
  read,
}) {
  return (
    <Card
      sx={{
        mb: 2,
        backgroundColor: "#1e1e1e",
        color: "white",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Chip
            label={type}
            color="primary"
          />

          <Chip
            label={read ? "Viewed" : "New"}
            color={read ? "success" : "error"}
          />
        </Box>

        <Typography variant="h6">
          {message}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#cccccc",
            mt: 1,
          }}
        >
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;