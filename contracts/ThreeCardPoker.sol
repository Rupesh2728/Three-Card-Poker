// SPDX-License-Identifier: UNLISCENED
pragma solidity >=0.5.0 <0.9.0;

contract ThreeCardPoker
{     
    struct Player
     {   string name;
        address player_address;

         uint card_suit1;
         uint card_num1;

          uint card_suit2;
         uint card_num2;

          uint card_suit3;
         uint card_num3;

         uint score;
          // King => hearts 
     }

    uint prevroundbalance;
    mapping(address=>uint) public registered_Users;
    address[] public winners;
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
        participents.push(Player(_name,msg.sender,Random_Suit(),Random_CardNum(),Random_Suit(),Random_CardNum(),Random_Suit(),Random_CardNum(),0));
    }

    function getContractBal() public view returns(uint)
    {
         return address(this).balance;
    }

    
    function select_Winner() public {
        require(participents.length==4,"4 participents are req for a game..."); 
        uint maxscore=0;

        for(uint i=0;i<participents.length;i++)
        {   
            uint _score=(participents[i].card_num1==0?13:participents[i].card_num1)+
            (participents[i].card_num2==0?13:participents[i].card_num2)+
            (participents[i].card_num3==0?13:participents[i].card_num3);
            
            participents[i].score=_score;
              
           if(_score>maxscore)
              maxscore=_score;   
           
        }

        for(uint i=0;i<participents.length;i++)
        {  if(maxscore==participents[i].score)
             winners.push(participents[i].player_address);
        }

        uint balance;

        if(prevroundbalance<address(this).balance)
          balance=address(this).balance-prevroundbalance;
        else 
          balance=prevroundbalance-address(this).balance;

        prevroundbalance+=balance;

        uint final_prize=balance/winners.length;

        for(uint i=0;i<winners.length;i++)
       { 
          registered_Users[winners[i]]+=final_prize;
       }

    }

    function exit_game() public  
    {
        delete winners;
        delete participents;
    }

    function transfer_bet_from_game_to_acc() public payable 
    { 
        uint value=registered_Users[msg.sender];
        payable(msg.sender).transfer(value);
        registered_Users[msg.sender]=0;
    }


    function getplayers_arr() public view returns(Player[] memory)
    {
        return participents;
    }

     function getwinners_arr() public view returns(address[] memory)
    {
        return winners;
    }

}