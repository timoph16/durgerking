from flask import Flask
from flask import render_template
from numpy import array as a

posts = [
	{'id': 0, 'name': 'Кроссовки 555', 'price': 555, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 5, 'image': 'https://shop4test.intermir.ru/img/85-1.jpg'},
	{'id': 1, 'name': 'Кроссовки 666', 'price': 666, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 6, 'image': 'https://shop4test.intermir.ru/img/86-1.jpg'},
	{'id': 2, 'name': 'Кроссовки 777', 'price': 777, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 7, 'image': 'https://shop4test.intermir.ru/img/87-1.jpg'},
	{'id': 3, 'name': 'Кроссовки 888', 'price': 888, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 8, 'image': 'https://shop4test.intermir.ru/img/88-1.jpg'},
	{'id': 4, 'name': 'Кроссовки 999', 'price': 999, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 9, 'image': 'https://shop4test.intermir.ru/img/89-1.jpg'},
	{'id': 5, 'name': 'Кроссовки 1000', 'price': 1000, 'sizes': [37, 38, 39, 40, 42, 43, 45], 'count': 10, 'image': 'https://shop4test.intermir.ru/img/90-1.jpg'},
]


# ~ print(товары)
app = Flask(__name__, static_folder="static")

@app.route('/')
def index():
	global posts
	return render_template('index.html', posts=posts)

@app.route('/hello/<name>')
def hello(name):
	return "<script>localStorage.setItem('test', 1);</script>"
	return render_template('hello.html', name=name)

if __name__ == '__main__':
	app.run(debug=True)
