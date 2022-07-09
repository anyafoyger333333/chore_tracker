# Import Flask class
from flask import Flask, render_template
 
# Webapp Theme colors : Yellow, Red, & Blue

# Create Flask object
app = Flask(__name__)

# First page/screen seen when going to the site 
@app.route('/')
def hello_world():
    return render_template('homepage.html')

# Runs the app when this file is executed, with the IP address
# of the computer is running on as server for the webapp
app.run(host="0.0.0.0", port=5000, debug=True)