convert -format jpg -thumbnail '512x>' -quality 60 -set filename:base '%t' '*.jpg' '%[filename:base]-thumb.jpg'

