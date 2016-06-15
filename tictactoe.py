moves = {'tl': ' ','tm': ' ','tr': ' ','ml': ' ','mm': ' ','mr': ' ','bl': ' ','bm': ' ','br': ' '}
board = ['TL','TM','TR','ML','MM','MR','BL','BM','BR']
players = {'Player 1': 'X', 'Player 2': 'O'}
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

while len(legal_moves()) > 0:
  print_help ()
  for name, symbol in players.items():
    dialogue = name + ", where would you like to place your " + symbol + "? "
    move = raw_input(dialogue)
    is_legal_move = is_legal(move) 
    while (not is_legal_move):
      move = raw_input("That's an illegal move, please select another: ")
      is_legal_move = is_legal(move)
    moves[move] = symbol
    print_board ()
    if len(legal_moves()) == 0:
      break
  print moves
  print "\n\n"

