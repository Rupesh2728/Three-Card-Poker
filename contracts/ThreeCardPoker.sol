// SPDX-License-Identifier: UNLISCENED
pragma solidity >=0.5.0 <0.9.0;

contract ThreeCardPoker
{     
    //  struct Card
    //  {
    //     uint suit;     // Clubs-0 Spades-1 Hearts-2 Diamonds-3
    //     uint card_num; // A-0, 2-1,3-2.......10-9,Jack-10, Queen-11, king-12, 
    //     //if 0, that is equivalent to 13
    //  }

    struct Player
     {   string name;
        address player_address;

         uint card_suit1;
         uint card_num1;

          uint card_suit2;
         uint card_num2;

          uint card_suit3;
         uint card_num3;
          // King => hearts 
     }

     struct User
     {
         string name;
         uint coin_balance;
     }

    //  mapping(address=>User) registered_Users;

    address public manager;
    Player[] public participents;
    uint randNounce=0;


    constructor()
    {
        manager=msg.sender;
    }

    function random() public returns(uint)
    {
         randNounce+=1;
        return uint(keccak256(abi.encodePacked(block.difficulty,block.timestamp,randNounce)));
    }

    function Random_Suit() public returns (uint) {
        uint suit_num= random() % 4;
        return suit_num;
    }

    function Random_CardNum() public returns (uint) {
        uint card_num= random() % 13;
        return card_num;
    }

    function Play_poker(string memory _name) public payable 
    {   
        // payable(manager).transfer(msg.value);
        participents.push(Player(_name,msg.sender,Random_Suit(),Random_CardNum(),Random_Suit(),Random_CardNum(),Random_Suit(),Random_CardNum()));
    }

    function getContractBal() public view returns(uint)
    {
         return address(this).balance;
    }

    
    function select_Winner() public payable {
        require(participents.length>=3 && msg.sender==manager,"Min 3 participents are req..."); 
        uint maxscore=0;
        address winner;
        for(uint i=0;i<participents.length;i++)
        {   
            uint score=(participents[i].card_num1==0?13:participents[i].card_num1)+
            (participents[i].card_num2==0?13:participents[i].card_num2)+
            (participents[i].card_num3==0?13:participents[i].card_num3);
            
           if(score>maxscore)
           {
             maxscore=score;
             winner=participents[i].player_address;     // If max score equal case missed
           }
        }
        
        uint balance=address(this).balance;
        payable(winner).transfer(balance); 
    }

}