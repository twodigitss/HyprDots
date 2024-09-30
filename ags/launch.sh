
#NIXOS ags package when its running looks like this...
process_name=".ags-wrapped"

#AND this is how a normal person should run it...
#process_name="ags"

#Bar folder
bar="hbar"

#command
start_command="ags -c $HOME/.config/ags/$bar/config.js &"

#Verifies if te process is stil running in background
if pgrep -x "$process_name" > /dev/null; then
    #Tries to kill it and restart it with the new process
    if pkill "$process_name"; then
        $start_command
    else
        echo "$process_name cannot be killed, do something else..."
        exit 1
    fi
else
    $start_command
fi

