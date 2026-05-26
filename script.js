function celebrate() {

  const messages = [

    "Namskaara SRL avrige 🔥",
    "EE SALA CUP NAMDE 🏆",
    "PLAYOFF MONSTERS 😤"

  ];

  const random =
    messages[Math.floor(Math.random() * messages.length)];

  document.getElementById("message").innerText = random;
}
