import { useState } from "react";
import "./App.css";

export default function App() {
  const [transportation, setTransportation] = useState("");
  const [usage, setUsage] = useState("");
  const [comment, setComment] = useState("");
  const [experience, setExperience] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [formData, setFormData] = useState(false);

  const formHandler = (event) => {
    event.preventDefault();
    if (transportation && usage && experience && checkbox) {
      setFormData(true);
    }
  };

  return (
    <main>
      <h1>Transportation Preference Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="modeSelect">Preferred Mode of Transportation: </label>
        <select
          id="modeSelect"
          onChange={(event) => setTransportation(event.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
          <option value="Bicycle">Bicycle</option>
          <option value="Walk">Walk</option>
        </select>
        <br /> <br />
        <label htmlFor="usageSelect">Frequency of Usage: </label>
        <select
          id="usageSelect"
          onChange={(event) => setUsage(event.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Occasionally">Occasionally</option>
        </select>
        <br /> <br />
        <label htmlFor="commentBox">Comments (if any):</label>
        <br />
        <textarea
          id="commentBox"
          rows={4}
          cols={50}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <br /> <br />
        <label>Experience Level:</label>
        <br />
        <input
          type="radio"
          name="experience"
          value="Beginner"
          required
          onChange={(event) => setExperience(event.target.value)}
        />{" "}
        Beginner <br />
        <input
          type="radio"
          name="experience"
          value="Intermediate"
          required
          onChange={(event) => setExperience(event.target.value)}
        />{" "}
        Intermediate <br />
        <input
          type="radio"
          name="experience"
          value="Advanced"
          required
          onChange={(event) => setExperience(event.target.value)}
        />{" "}
        Advanced
        <br /> <br />
        <input
          type="checkbox"
          onChange={(event) => setCheckbox(event.target.checked)}
          required
        />
        <label>I agree to the terms and conditions.</label>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>

      {formData && (
        <div>
          <h2>Submitted Details: </h2>
          <p>Preffered Mode of Transportation: {transportation}</p>
          <p>Frequency of Usage: {usage}</p>
          <p>Comments: {comment || "none"}</p>
          <p>Experience Level: {experience}</p>
        </div>
      )}
    </main>
  );
}
