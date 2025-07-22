class Grid :
    def __init__(self) -> None:
        self.HolesPlayer1 =  [4]*6
        self.HolesPlayer2 =  [4]*6

class Player :
    def __init__(self) -> None:
        self.numberOfPieces = 0

def main():
    grid = Grid()

    player1 = Player()
    player2 = Player()

    