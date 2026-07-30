"""Turn the food-gathering animation into a smooth, web-ready hero video."""

from __future__ import annotations

from pathlib import Path

import imageio.v2 as imageio
import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "food-gathering.gif"
OUTPUT = ROOT / "public" / "food-gathering.mp4"
FPS = 30


gif = Image.open(SOURCE)
keyframes: list[np.ndarray] = []
durations: list[float] = []

for index in range(gif.n_frames):
    gif.seek(index)
    keyframes.append(np.asarray(gif.convert("RGB"), dtype=np.float32))
    durations.append(max(0.04, gif.info.get("duration", 85) / 1000))

writer = imageio.get_writer(
    OUTPUT,
    fps=FPS,
    codec="libx264",
    quality=8,
    pixelformat="yuv420p",
    macro_block_size=2,
    ffmpeg_log_level="error",
    output_params=["-movflags", "+faststart"],
)

try:
    for index, current in enumerate(keyframes):
        following = keyframes[min(index + 1, len(keyframes) - 1)]
        count = max(1, round(durations[index] * FPS))
        for subframe in range(count):
            mix = subframe / count
            # Smoothstep removes the mechanical look of a linear crossfade.
            mix = mix * mix * (3 - 2 * mix)
            frame = current * (1 - mix) + following * mix
            writer.append_data(np.clip(frame, 0, 255).astype(np.uint8))
finally:
    writer.close()

print(f"Created {OUTPUT} ({OUTPUT.stat().st_size / 1024 / 1024:.2f} MB)")
