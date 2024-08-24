#!/usr/bin/env python3
import re
import os

config = "/home/lewis/.config"
scheme = "nord.xresources"
xresources_file = f"{config}/cfiles/xresources/{scheme}"
colors_output_file = f"{config}/kitty/colorscheme.conf"

def read_xresources_colors(file_path):
    colors = {}
    try:
        with open(file_path, 'r') as f:
            content = f.read()
            #print("Xresources content:\n", content)  # Debugging output

        # Regex to match color definitions
        color_regex = re.compile(r'^\*color(\d+):\s*#(\w{6})', re.MULTILINE)
        matches = color_regex.findall(content)
        print("Colors found:")  # Debugging output
        for i in matches:
            print(i, end="\n")

        # Map colors
        for index, color in matches:
            # Kitty uses color names like `color0`, `color1`, etc.
            color_name = f'color{index}'
            colors[color_name] = f"#{color}"

    except FileNotFoundError:
        print(f"File not found: {file_path}")
    
    return colors

def write_kitty_config(colors, file_path):
    try:
        with open(file_path, 'w') as f:
            f.write('# Colors from Xresources\n')

            # Write colors to Kitty config
            for name, color in colors.items():
                f.write(f'{name} {color}\n')

    except FileNotFoundError:
        print(f"File not found: {file_path}")

def main():
    xresources_path = os.path.expanduser(xresources_file)
    kitty_path = os.path.expanduser(colors_output_file)

    colors = read_xresources_colors(xresources_path)
    if colors:
        write_kitty_config(colors, kitty_path)
        print(f"Kitty updated with colors from {scheme}.")
    else:
        print("No colors found or wrong declaration format:")
        print("note: This file reads '*color', and not '*.color'...")
        print("check the syntax please")

if __name__ == "__main__":
    main()

