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
