
#NIXOS ags package when its running looks like this...
process_name=".ags-wrapped"

#AND this is how a normal person should run it...
#process_name="ags"

#Bar folder
bar="verticalBar"
#bar="horizontalBar"

# Define el comando para iniciar el proceso con la configuración especificada
start_command="ags -c $HOME/.config/ags/$bar/config.js &"

# Verifica si el proceso está corriendo
if pgrep -x "$process_name" > /dev/null; then
    # Si el proceso está corriendo, intenta detenerlo y luego reiniciarlo
    if killall "$process_name"; then
        $start_command
    else
        echo "Error: No se pudo detener $process_name"
        exit 1
    fi
else
    # Si el proceso no está corriendo, simplemente iníciarlo
    $start_command
fi

