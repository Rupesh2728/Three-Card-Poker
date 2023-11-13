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
    uint public platformfee;
    uint public owners_bal;
    uint public bonus;
    uint prevroundbalance;
    mapping(address=>uint) public registered_Users;
    mapping(address=>uint) public num_games_played_users;
    mapping(address=>uint) public Bonus_Users;
    address[] public exiting_Users;

    address[] public winners;
    address public manager;
    Player[] public participents;
    uint randNounce=0;

    constructor()
    {
        manager=msg.sender;
        platformfee=0;
        owners_bal=0;
        bonus=0;
    }

    function getOwnerBalance() public view returns(uint)
    {
        return manager.balance;
    }

    function setPlatformfee(uint pfee) public 
    {   require(msg.sender==manager);
        platformfee=pfee;
    } 

    function setBonus(uint _bonus) public 
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


    function Play_poker(string memory _name) public payable 
    {   
        participents.push(Player(_name,msg.sender,Random_Suit(),Random_CardNum(),Random_Suit(),Random_CardNum(),Random_Suit(),Random_CardNum(),0));
    }


    function getContractBal() public view returns(uint)
    {
         return address(this).balance;
    }

    function exiting_players_length() public view returns(uint)
    {
         return exiting_Users.length;
    }

    function num_games_played() public view returns(uint)
    {
         return num_games_played_users[msg.sender];
    }

    
    function select_Winner() public payable {
        require(participents.length==4,"4 participants only allowed..."); 
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

        num_games_played_users[msg.sender]+=1;
        if((num_games_played_users[msg.sender])%5==0)
        {
            Bonus_Users[msg.sender]+=bonus;
        }

        if(setwinner==false)
        {
           uint balance;

        if(prevroundbalance<address(this).balance)
          balance=address(this).balance-(4*platformfee)-prevroundbalance;
        else 
          balance=prevroundbalance-address(this).balance-(4*platformfee);

        prevroundbalance+=(balance+(4*platformfee));
       
        uint final_prize=balance/winners.length;

        for(uint i=0;i<winners.length;i++)
       { 
          registered_Users[winners[i]]+=final_prize;
       }

        // for(uint i=0;i<participents.length;i++)
        // {  
        //    bonus_Users[participents[i].player_address]+=1;

        //    if((bonus_Users[participents[i].player_address])%10==0)
        //    {
        //         registered_Users[participents[i].player_address]+=bonus;
        //    }
        // }

        setwinner=true;
        }
    }

    function exit_game() public  
    {
        delete winners;
        exiting_Users.push(msg.sender);
        if(exiting_Users.length==4)
        {
             delete participents;
              setwinner=false;
             delete exiting_Users;
        }
    }

    function transfer_bet_from_game_to_acc() public payable 
    { 
        uint value=registered_Users[msg.sender];
        payable(msg.sender).transfer(value);
        registered_Users[msg.sender]=0;
    }


    function transfer_bonus_from_contract_to_acc() public payable
    {
        uint value=Bonus_Users[msg.sender];
        payable(msg.sender).transfer(value);
        Bonus_Users[msg.sender]=0;
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