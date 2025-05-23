import { session } from "@wix/site-storage";

let currentTheme = 'light';

$w.onReady(function () {
  currentTheme = (session.getItem('theme') || 'light').toString();
  applyTheme(currentTheme);

  // Sync the toggle’s visual state RIGHT AWAY
  $w('#themeswitch').checked = (currentTheme === 'dark');

  // Now allow user interaction
  $w('#themeswitch').onChange(() => {
    currentTheme = (currentTheme === 'light') ? 'dark' : 'light';
    session.setItem('theme', currentTheme);
    applyTheme(currentTheme);
  });
});

function applyTheme(theme) {
  // Fix visual sync of toggle on first click
  setTimeout(() => {
    $w('#themeswitch').checked = (theme === 'dark');
  }, 10);

  // Header styling
  try {
    if (theme === 'dark') {
      $w('#navbackground').style.backgroundColor = "#575757";
      $w('#text27').style.color = "#FFFFFF";
      $w('#lightmode').style.color = "#FFFFFF";
      $w('#darkmode').style.color = "#FFFFFF";
    } else {
      $w('#navbackground').style.backgroundColor = "#FAF7F3";
      $w('#text27').style.color = "#000000";
      $w('#lightmode').style.color = "#000000";
      $w('#darkmode').style.color = "#000000";
    }
  } catch (e) {}

  const expand = id => { try { $w(id).expand(); } catch (e) {} };
  const collapse = id => { try { $w(id).collapse(); } catch (e) {} };

  // Theme sections
  if (theme === 'dark') {
    $w('#logo').src = 'https://static.wixstatic.com/shapes/426c9f_a5fbfa2a8f5b42be912eb81df4ee9233.svg';
    collapse('#herolight');
    collapse('#vidlight');
    collapse('#worklight');
    expand('#herodark');
    expand('#viddark');
    expand('#workdark');
    $w('#menulight').hide();
    $w('#menudark').show();
  } else {
    $w('#logo').src = 'https://static.wixstatic.com/shapes/426c9f_124ea2c62ddd4842b1f9dfa554dd0b78.svg';
    collapse('#herodark');
    collapse('#viddark');
    collapse('#workdark');
    expand('#herolight');
    expand('#vidlight');
    expand('#worklight');
    $w('#menudark').hide();
    $w('#menulight').show();
  }

  expand('#footer');
}
