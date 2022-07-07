# Import Flask class
from flask import Flask, render_template
 
 
# Create Flask object
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('homepage.html')

app.run(host="0.0.0.0", port=5000, debug=True)