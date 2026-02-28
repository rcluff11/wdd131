const BASE_HEALTH = 100;

const character = {
  name: "Snortleblat",
  characterClass: "Swamp Warden",
  level: 1,
  health: 100,
  maxHealth: 100,
  image: "snortleblat.webp",

  updateHealthBar() {
    const bar = document.getElementById("health-bar");
    const pct = (this.health / this.maxHealth) * 100;
    bar.style.width = pct + "%";
    if (pct > 50) {
      bar.style.background = "linear-gradient(90deg, #4caf50, #81c784)";
    } else if (pct > 25) {
      bar.style.background = "linear-gradient(90deg, #ff9800, #ffb74d)";
    } else {
      bar.style.background = "linear-gradient(90deg, #f44336, #e57373)";
    }
  },

  attacked() {
    const messageEl = document.getElementById("message");

    if (this.health <= 0) {
      messageEl.style.color = "#ff6b6b";
      messageEl.textContent = "💀 Snortleblat is already dead!";
      return;
    }

    this.health -= 20;

    if (this.health <= 0) {
      this.health = 0;
      document.getElementById("char-health").textContent = this.health;
      this.updateHealthBar();
      messageEl.style.color = "#ff6b6b";
      messageEl.textContent = "💀 Snortleblat has died!";
    } else {
      document.getElementById("char-health").textContent = this.health;
      this.updateHealthBar();
      messageEl.style.color = "#ff6b6b";
      messageEl.textContent = `⚔️ Attacked! ${this.health} HP remaining.`;
    }
  },

  levelUp() {
    const messageEl = document.getElementById("message");
    this.level += 1;
    this.health += 30;
    this.maxHealth += 30;
    document.getElementById("char-level").textContent = this.level;
    document.getElementById("char-health").textContent = this.health;
    document.getElementById("char-max-health").textContent = this.maxHealth;
    this.updateHealthBar();
    messageEl.style.color = "#6bffb8";
    messageEl.textContent = `⬆️ Level up! Now level ${this.level}! +30 HP`;
  }
};
