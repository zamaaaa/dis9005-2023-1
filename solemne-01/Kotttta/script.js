console.log("espero que le guste la receta :)");
function check_internet_connection():
try: get('http://google.com', timeout = 3)
    print('connected')
except exceptions.ConnectionError:
    print('not connected')

check_internet_connection()