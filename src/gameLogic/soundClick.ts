import pencilSound from "../static/sounds/pencil_draw.mp3";
import blockSound from "../static/sounds/stone1.mp3";

export function soundClick() {
    const audio = new Audio(); // Создаём новый элемент Audio
    audio.src = blockSound; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}