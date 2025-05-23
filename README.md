# Wix-Studio
// light bulb interaction
$w.onReady(function () {
  // 🔹 Set initial state: show gray, hide yellow
  $w('#lightbulbgray').show();
  $w('#lightbulbyellow').hide();

  // 🟡 On hover: hide gray, show yellow
  $w('#box80').onMouseIn(() => {
    if ($w('#lightbulbgray').isVisible) {
      $w('#lightbulbgray').hide();
      $w('#lightbulbyellow').show();
    }
  });

  // ⚫ On mouse leave: show gray, hide yellow
  $w('#box80').onMouseOut(() => {
    if ($w('#lightbulbyellow').isVisible) {
      $w('#lightbulbyellow').hide();
      $w('#lightbulbgray').show();
    }
  });
});


//device vector interaction
$w.onReady(function () {
  // 🔹 Set initial state: show gray, hide color
  $w('#devicegray').show();
  $w('#devicecolor').hide();

  // On hover: hide gray, show color
  $w('#box96').onMouseIn(() => {
    if ($w('#devicegray').isVisible) {
      $w('#devicegray').hide();
      $w('#devicecolor').show();
    }
  });

  // On mouse leave: show gray, hide color
  $w('#box96').onMouseOut(() => {
    if ($w('#devicecolor').isVisible) {
      $w('#devicecolor').hide();
      $w('#devicegray').show();
    }
  });
});


// Brand color interaction
$w.onReady(function () {
  // 🔹 Set initial state: show gray, hide blue
  $w('#brandgray').show();
  $w('#brandcolor').hide();

  // On hover: hide gray, show blue
  $w('#box97').onMouseIn(() => {
    if ($w('#brandgray').isVisible) {
      $w('#brandgray').hide();
      $w('#brandcolor').show();
    }
  });

  // On mouse leave: show gray, hide blue
  $w('#box97').onMouseOut(() => {
    if ($w('#brandcolor').isVisible) {
      $w('#brandcolor').hide();
      $w('#brandgray').show();
    }
  });
});


// Consultation Interaction
$w.onReady(function () {
  // 🔹 Set initial state: show gray, hide yellow
  $w('#consultgray').show();
  $w('#consultcolor').hide();

  // 🟡 On hover: hide gray, show yellow
  $w('#box95').onMouseIn(() => {
    if ($w('#consultgray').isVisible) {
      $w('#consultgray').hide();
      $w('#consultcolor').show();
    }
  });

  // ⚫ On mouse leave: show gray, hide yellow
  $w('#box95').onMouseOut(() => {
    if ($w('#consultcolor').isVisible) {
      $w('#consultcolor').hide();
      $w('#consultgray').show();
    }
  });
});
