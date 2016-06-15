moves = {'tl': ' ','tm': ' ','tr': ' ','ml': ' ','mm': ' ','mr': ' ','bl': ' ','bm': ' ','br': ' '}
board = ['TL','TM','TR','ML','MM','MR','BL','BM','BR']

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
  return moves[move] == ' '
  
def legal_moves():
  return [key for key, value in moves.items() if value == ' ']

while True:
  print_help ()
  player_one = raw_input("Player 1, where would you like to place your X? ")
  one_legal_move = is_legal(player_one) 
  while (not one_legal_move):
    player_one = raw_input("That's an illegal move, please select another: ")
    one_legal_move = is_legal(player_one)
  moves[player_one] = 'X'
  print_board ()
  player_two = raw_input("Player 2, where would you like to place your O? ")
  two_legal_move = is_legal(player_two)
  while (not two_legal_move):
    player_two = raw_input("That's an illegal move, please select another: ")
    two_legal_move = is_legal(player_two)
  moves[player_two] = 'O'
  print_board ()
  print moves
  print "\n\n"

