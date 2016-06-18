moves = {'tl': ' ','tm': ' ','tr': ' ','ml': ' ','mm': ' ','mr': ' ','bl': ' ','bm': ' ','br': ' '}
board = ['TL','TM','TR','ML','MM','MR','BL','BM','BR']
players = {'Player 1': 'X', 'Player 2': 'O'}

windict = {'tl' : [['tm', 'tr'], ['mm', 'br'], ['ml', 'bl']],
  'tm': [['tl', 'tr'], ['mm', 'bm']],
  'tr': [['tl', 'tm'], ['mm', 'bl'], ['mr', 'br']],
  'ml': [['tl', 'bl'], ['mm', 'mr']],
  'mm': [['tl', 'br'], ['bl', 'tr'], ['tm', 'bm'], ['ml', 'mr']],
  'mr': [['ml', 'mm'], ['tr', 'br']],
  'bl': [['tl', 'ml'], ['mm', 'tr'], ['bm', 'br']],
  'bm': [['bl', 'br'], ['tm', 'mm']],
  'br': [['bl', 'bm'], ['tl', 'mm'], ['tr', 'mr']]}

winstates = [['tl', 'tm', 'tr'],
  ['ml', 'mm', 'mr'],
  ['bl', 'bm', 'br'],
  ['tl', 'mm', 'br'],
  ['bl', 'mm', 'tr'],
  ['tl', 'ml', 'bl'],
  ['tm', 'mm', 'bm'],
  ['tr', 'mr', 'br']]

def print_help ():
  print "TL|TM|TR"
  print "---------"
  print "ML|MM|MR"
  print "---------"
  print "BL|BM|BR"
  print "\n"

def print_board ():
  print "\n"
  print moves['tl'],"|",moves['tm'], "|", moves['tr']
  print "---------"
  print moves['ml'],"|",moves['mm'], "|", moves['mr']
  print "---------"
  print moves['bl'],"|",moves['bm'], "|", moves['br']
  print "\n"
  
def is_legal (move):
  return move in legal_moves()
  
def legal_moves():
  return [key for key, value in moves.items() if value == ' ']

def someone_won(symbol, move):
  for win_array in windict[move]:
    position_one = win_array[0]
    position_two = win_array[1]
    print "need the following positions to win: ", position_one, ", ", position_two, "\n"
    if symbol == moves[position_one] and symbol == moves[position_two]:
      print "Somebody won!"
      return True
  print "Nobody won!"
  return False 

while len(legal_moves()) > 0:
  print_help ()
  for name, symbol in players.items():
    dialogue = name + ", where would you like to place your " + symbol + "? "
    move = raw_input(dialogue)
    while (not is_legal(move)):
      move = raw_input("That's an illegal move, please select another: ")
    moves[move] = symbol
    print_board ()
    if len(legal_moves()) == 0 or someone_won(symbol, move):
      break
  print moves
  print "\n\n"

