import React, { useState } from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import "./icons.css";
import { IconButton, Popover, Typography } from "@mui/material";
import BookmarkRemove from "@mui/icons-material/Bookmark";
import Report from "@mui/icons-material/Report";
import Selected from "@mui/icons-material/SelectAll";

const IconSection = ({
  setSorting,
  bookmarked,
  hidden,
  reported,
  setReported,
  setHidden,
  setBookmarked,
  setRefetch,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const sortingData = [
    { sortby: "name", sortorder: "asc", label: "Name ASC" },
    { sortby: "name", sortorder: "desc", label: "Name DESC" },
    { sortby: "duration", sortorder: "asc", label: "Durations ASC" },
    { sortby: "duration", sortorder: "desc", label: "Durations DESC" },
    { sortby: "enrollment", sortorder: "asc", label: "Enrollment ASC" },
    { sortby: "enrollment", sortorder: "desc", label: "Enrollment DESC" },
    { sortby: "price", sortorder: "asc", label: "Price ASC" },
    { sortby: "price", sortorder: "desc", label: "Price DESC" },
  ];
  return (
    <div className="icons-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignContent: "flex-start",
          gap: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ArticleOutlinedIcon
            style={{
              color: "#E0A64E",
              height: 36,
              width: 36,
              alignItems: "center",
              alignContent: "center",
            }}
          />
          <Typography sx={{ fontSize: 10, color: "#8D4337" }}>
            Contact
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <InsertPhotoOutlinedIcon
            style={{
              color: "#716966",
              height: 36,
              width: 36,
              alignItems: "center",
              alignContent: "center",
            }}
          />
          <Typography sx={{ fontSize: 10, color: "#716966" }}>
            Gallary
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <PlaceOutlinedIcon
            style={{
              color: "#716966",
              height: 36,
              width: 36,
              alignItems: "center",
              alignContent: "center",
            }}
          />
          <Typography sx={{ fontSize: 10, color: "#716966" }}>
            Location
          </Typography>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onClick={() => {
            setHidden((prev) => !prev);
            setRefetch("refresh");
          }}
        >
          <Selected
            style={{
              color: hidden ? "#8D4337" : "#716966",
              height: 36,
              width: 36,
              alignItems: "center",
              alignContent: "center",
            }}
          />
          <Typography sx={{ fontSize: 10, color: "#716966" }}>
            Hidden
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onClick={() => {
            setBookmarked((prev) => !prev);
            setRefetch("refresh");
          }}
        >
          <BookmarkRemove
            style={{
              color: bookmarked ? "#8D4337" : "#716966",
              height: 36,
              width: 36,
              alignItems: "center",
              alignContent: "center",
            }}
          />
          <Typography sx={{ fontSize: 10, color: "#716966" }}>
            Shortlisted
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onClick={() => {
            setReported((prev) => !prev);
            setRefetch("refresh");
          }}
        >
          <Report
            style={{
              color: reported ? "#8D4337" : "#716966",
              height: 36,
              width: 36,
              alignItems: "center",
              alignContent: "center",
            }}
          />
          <Typography sx={{ fontSize: 10, color: "#716966" }}>
            Reported
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IconButton onClick={handleClick}>
            <SortOutlinedIcon
              style={{
                color: "#716966",
                height: 36,
                width: 36,
                alignItems: "center",
                alignContent: "center",
              }}
            />
          </IconButton>
          <Typography sx={{ fontSize: 10, color: "#716966" }}>Short</Typography>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <ul
              style={{
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: 2,
                listStyle: "none",
              }}
            >
              {sortingData.map((sortingData) => (
                <li
                  style={{
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: 2,
                    marginBottom: 8,
                  }}
                  key={`${sortingData.sortby}-${sortingData.sortorder}`}
                  onClick={() => setSorting(sortingData)}
                >
                  {sortingData.label}
                </li>
              ))}
            </ul>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default IconSection;
