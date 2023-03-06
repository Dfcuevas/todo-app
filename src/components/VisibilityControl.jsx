import React from "react";

function VisibilityControl({ isChecked, setShowCompleted, deleleTasks }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      deleleTasks();
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => setShowCompleted(e.target.checked)}
        checked={isChecked}
      />
      <label>Show Tasks Done</label>
      <button onClick={handleDelete}>Clear</button>
    </div>
  );
}

export default VisibilityControl;
