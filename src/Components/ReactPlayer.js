import React, { useState } from "react";
import ReactPlayer from "react-player";
import Modal from "antd/es/modal/Modal";

export const VideoPlayer = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(true);
  const [currQuestion, setCurrQuestion] = useState(null);

  // Define time intervals and associated questions
  const timeIntervals = [
    {
      time: "1:20",
      question: "What is 2 + 2?",
      options: ["3", "4", "5"],
      correctAnswer: "4",
    },
    {
      time: "0:05",
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin"],
      correctAnswer: "Paris",
    },
    // Add more time intervals and questions as needed
  ];

  // Function to handle user selection
  const handleOptionSelect = (selectedOption) => {
    // Check if the selected option is correct
    // Handle the correct/incorrect answer accordingly
    // You can set state variables to indicate correct/incorrect answer and style the options accordingly
    console.log("Selected option:", selectedOption);
    setShowModal(false); // Close the modal after answering
    setPlay(true);
  };
  const timeStringToSeconds = (timeString) => {
    // Split the time string by ":"
    const timeParts = timeString.split(":");

    // If only one part is present, assume it's minutes
    if (timeParts.length === 1) {
      return parseInt(timeParts[0]) * 60; // Convert minutes to seconds
    }

    // If two parts are present, assume they are minutes and seconds
    if (timeParts.length === 2) {
      const minutes = parseInt(timeParts[0]);
      const seconds = parseInt(timeParts[1]);
      return minutes * 60 + seconds; // Convert minutes and seconds to seconds
    }

    // If more than two parts are present or the format is invalid, return 0 or handle error as needed
    return 0;
  };

  // Function to handle time update
  const handleTimeUpdate = (time) => {
    console.log("time without conversion---", time);
    setCurrentTime(time);
    // Check if the current time matches any of the defined time intervals
    const currentTimeInterval = timeIntervals.find((interval) => {
      console.log(
        "timeset=",
        timeStringToSeconds(interval.time),
        " time to= ",
        time
      );
      if (timeStringToSeconds(interval.time) === time) {
        setCurrQuestion(interval);
        return true;
      }
    });
    if (currentTimeInterval) {
      setPlay(false);
      setShowModal(true); // Show the modal if the current time matches a defined interval
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <div style={{ maxWidth: "80%", maxHeight: "80%", position: "relative" }}>
        <ReactPlayer
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
          controls
          playing={play}
          width="100%"
          height="100%"
          onProgress={({ playedSeconds }) => {
            console.log("");
            handleTimeUpdate(Math.floor(playedSeconds));
          }}
        />
      </div>
      <Modal open={showModal}>
        <h2>{currQuestion?.question}</h2>
        <ul>
          {currQuestion?.options.map((opt, index) => {
            return (
              <li key={index} onClick={() => handleOptionSelect(opt)}>
                {`${String.fromCharCode(65 + index)}: ${opt}`}{" "}
              </li>
            );
          })}
        </ul>
      </Modal>
    </div>
  );
};
