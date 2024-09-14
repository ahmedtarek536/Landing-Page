import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Collections, Home, RoomServiceOutlined } from "@mui/icons-material";

export default function Bar() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 460,
        bgcolor: "black",
        zIndex: "50000",
        position: "relative",
      }}
    >
      <nav aria-label="main mailbox folders ">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Service" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Collection" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Roadmap" />
              <Divider />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="About" />
            </ListItemButton>
            <Divider />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
