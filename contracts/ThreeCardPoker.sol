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
 
    bool setwinner=false;
    string public platformfee;
    uint public owners_bal;
    string public bonus;
    uint prevroundbalance;
    mapping(address=>uint) public registered_Users;
    address[] public winners;
    address public manager;
    Player[] public participents;
    uint randNounce=0;

    constructor()
    {
        manager=msg.sender;
        platformfee="0";
        owners_bal=0;
        bonus="0";
    }

    function getOwnerBalance() public view returns(uint)
    {
        return manager.balance;
    }

    function setPlatformfee(string memory pfee) public 
    {   require(msg.sender==manager);
        platformfee=pfee;
    } 

    function setBonus(string memory _bonus) public 
    {   require(msg.sender==manager);
        bonus=_bonus;
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


    function payplatformfee(uint val) public payable 
    {
          payable(manager).transfer(val);
    }


    function Play_poker(string memory _name,uint pfee) public payable 
    {   
        participents.push(Player(_name,msg.sender,Random_Suit(),Random_CardNum(),Random_Suit(),Random_CardNum(),Random_Suit(),Random_CardNum(),0));

        payplatformfee(pfee);
    }


    function getContractBal() public view returns(uint)
    {
         return address(this).balance;
    }

    
    function select_Winner() public payable {
        require(participents.length==4,"Min 3 participents are req..."); 
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

        if(setwinner==false)
        {
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

        setwinner=true;
        }
       

    }

    function exit_game() public  
    {
        delete winners;
        delete participents;
        setwinner=false;
    }

    function transfer_bet_from_game_to_acc() public payable 
    { 
        uint value=registered_Users[msg.sender];
        payable(msg.sender).transfer(value);
        registered_Users[msg.sender]=0;
    }


    function update_wallet(address acc,uint val) public 
    {
         registered_Users[acc]=val;
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