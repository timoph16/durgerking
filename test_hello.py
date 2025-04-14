import unittest
from app import app

class HelloWorld(unittest.TestCase):
	def setUp(self):
		self.client = app.test_client()
	
	def hello_world(self):
		response = self.client.get('/')
		self.assertEqual(response.status_code, 200)
		self.assertIn(b'Hello World', response.data)
		
