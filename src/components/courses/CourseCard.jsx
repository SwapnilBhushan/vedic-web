import React from "react";
import "./course.css";
import { Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import BookmarkRemoveOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import ReportOffOutlined from "@mui/icons-material/ReportOffOutlined";
const CourseCard = ({ item, setAction }) => {
  return (
    <div className="course-container">
      <div className="course-detail">
        <div style={{}}>
          <h3>{item.name}</h3>
          <div style={{}}>
            <span className="star-icon fa fa-star" />
            <span className="star-icon fa fa-star" />
            <span className="star-icon fa fa-star" />
            <span className="star-icon fa fa-star" />
            <span className="star-icon fa fa-star" />
          </div>
        </div>
        <div className="course-desc">
          <p>{item.description}</p>
        </div>
        <div className="course-counter">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                alignItems: "center",
                alignContent: "center",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {item.enrollment}
            </Typography>
            <Typography sx={{ fontSize: 10 }}>Enrolled</Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                alignItems: "center",
                alignContent: "center",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {item.duration}
            </Typography>
            <Typography sx={{ fontSize: 10 }}>Months</Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                alignItems: "center",
                alignContent: "center",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              ${item.price}
            </Typography>
            <Typography sx={{ fontSize: 10 }}>Price</Typography>
          </div>
        </div>

        <div className="contactNumber-container">
          <Typography sx={{ fontSize: 16, lineHeight: 5, fontWeight: 500 }}>
            {item.contactNumber}
          </Typography>
        </div>
      </div>
      <div className="course-icon">
        <div onClick={() => setAction("detail", item._id)}>
          <ArrowForwardOutlinedIcon className="icon" />
          <Typography sx={{ fontSize: 8, color: "#8D4337" }}>Detail</Typography>
        </div>
        <div
          onClick={() => setAction(item.isHidden ? "unhide" : "hide", item._id)}
        >
          {item.isHidden ? (
            <>
              <VisibilityOffOutlinedIcon className="icon" />
              <Typography sx={{ fontSize: 8, color: "#8D4337" }}>
                Unhide
              </Typography>
            </>
          ) : (
            <>
              <VisibilityOutlinedIcon className="icon" />
              <Typography sx={{ fontSize: 8, color: "#8D4337" }}>
                Hide
              </Typography>
            </>
          )}
        </div>
        <div
          onClick={() =>
            setAction(item.isBookmarked ? "unbookmark" : "bookmark", item._id)
          }
        >
          {item.isBookmarked ? (
            <>
              <BookmarkAddedOutlinedIcon className="icon" />
              <Typography sx={{ fontSize: 8, color: "#8D4337" }}>
                Remove Bookmark
              </Typography>
            </>
          ) : (
            <>
              <BookmarkRemoveOutlinedIcon className="icon" />
              <Typography sx={{ fontSize: 8, color: "#8D4337" }}>
                Bookmark
              </Typography>
            </>
          )}
        </div>
        <div
          onClick={() =>
            setAction(item.isReported ? "unreport" : "report", item._id)
          }
        >
          {item.isReported ? (
            <>
              <ReportOffOutlined className="icon" />
              <Typography sx={{ fontSize: 8, color: "#8D4337" }}>
                Remove reported
              </Typography>
            </>
          ) : (
            <>
              <ReportOutlinedIcon className="icon" />
              <Typography sx={{ fontSize: 8, color: "#8D4337" }}>
                Report
              </Typography>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
