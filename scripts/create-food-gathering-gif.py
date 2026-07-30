"""Build the hero GIF: scattered food particles gather into the finished thali."""

from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "food-gathering-final.png"
OUTPUT = ROOT / "public" / "food-gathering.gif"
POSTER = ROOT / "public" / "food-gathering-poster.webp"
SIZE = (840, 472)
FRAME_COUNT = 34
random.seed(2405)


def cover(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    ratio = max(size[0] / image.width, size[1] / image.height)
    scaled = image.resize(
        (round(image.width * ratio), round(image.height * ratio)),
        Image.Resampling.LANCZOS,
    )
    left = (scaled.width - size[0]) // 2
    top = (scaled.height - size[1]) // 2
    return scaled.crop((left, top, left + size[0], top + size[1]))


target = cover(Image.open(SOURCE).convert("RGB"), SIZE)
target.save(POSTER, "WEBP", quality=88, method=6)

# A quiet background keeps the headline readable while ingredients assemble.
background = ImageEnhance.Brightness(target.filter(ImageFilter.GaussianBlur(7))).enhance(0.32)
background = Image.blend(background, Image.new("RGB", SIZE, "#091316"), 0.42)

particles: list[tuple[float, ...]] = []
pixels = target.load()
cx, cy = 605, 246
for y in range(24, SIZE[1] - 18, 9):
    for x in range(326, SIZE[0] - 10, 9):
        r, g, b = pixels[x, y]
        if max(r, g, b) < 26:
            continue
        angle = math.atan2(y - cy, x - cx) + random.uniform(-0.55, 0.55)
        distance = random.uniform(310, 690)
        start_x = cx + math.cos(angle) * distance + random.uniform(-120, 120)
        start_y = cy + math.sin(angle) * distance * 0.62 + random.uniform(-75, 75)
        size = random.choice((1.2, 1.5, 1.8, 2.2, 2.8))
        phase = random.uniform(0, math.tau)
        delay = random.uniform(0, 0.21)
        particles.append((start_x, start_y, x, y, r, g, b, size, phase, delay))

frames: list[Image.Image] = []
for index in range(FRAME_COUNT):
    progress = index / (FRAME_COUNT - 1)
    scene = background.copy()
    glow = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow, "RGBA")
    dots = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    dots_draw = ImageDraw.Draw(dots, "RGBA")

    for sx, sy, tx, ty, r, g, b, radius, phase, delay in particles:
        local = max(0.0, min(1.0, (progress - delay) / (0.74 - delay)))
        eased = 1 - (1 - local) ** 3
        arc = math.sin(local * math.pi) * (28 + 14 * math.sin(phase))
        x = sx + (tx - sx) * eased + math.cos(phase) * arc
        y = sy + (ty - sy) * eased + math.sin(phase) * arc
        alpha = int(70 + 185 * min(1, local * 2.2))
        rr = radius * (1.75 - 0.65 * eased)
        glow_draw.ellipse((x - rr * 2.8, y - rr * 2.8, x + rr * 2.8, y + rr * 2.8), fill=(r, g, b, alpha // 4))
        dots_draw.ellipse((x - rr, y - rr, x + rr, y + rr), fill=(r, g, b, alpha))

    glow = glow.filter(ImageFilter.GaussianBlur(4))
    scene = Image.alpha_composite(scene.convert("RGBA"), glow)
    scene = Image.alpha_composite(scene, dots)

    # Resolve the thousands of particles into a crisp final meal.
    reveal = max(0.0, min(1.0, (progress - 0.54) / 0.32))
    reveal = reveal * reveal * (3 - 2 * reveal)
    if reveal:
        scene = Image.blend(scene.convert("RGB"), target, reveal).convert("RGBA")

    frames.append(scene.convert("P", palette=Image.Palette.ADAPTIVE, colors=192))

# Hold the completed bowl so the call-to-action has a calm readable moment.
frames.extend([frames[-1].copy() for _ in range(8)])
frames[0].save(
    OUTPUT,
    save_all=True,
    append_images=frames[1:],
    duration=[85] * FRAME_COUNT + [120] * 8,
    loop=0,
    optimize=True,
    disposal=2,
)
print(f"Created {OUTPUT} ({OUTPUT.stat().st_size / 1024 / 1024:.2f} MB)")
