pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public
    {
        address newCampaign = new Campaign(minimum,msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalCount;
    }

    Request[] public requests;
    address public manager;
    mapping(address => bool) public approvers;
    mapping(address => uint) public approversSum;
    uint public minimumContribution;
    uint public approversCount;

    modifier restricted(){
        require(manager == msg.sender);
        _;
    }

    function Campaign(uint minimum,address sender) public {
        manager = sender;
        minimumContribution = minimum;

    }

    function contribute() public payable{
        require(msg.value > minimumContribution);
        if(!approvers[msg.sender])
        {
          approversCount++;
        }
        approvers[msg.sender] = true;
        approversSum[msg.sender] = approversSum[msg.sender] + msg.value;


    }
    function findSum(address sender) public view returns (uint)
    {
      return approversSum[sender];
    }
    function createRequest(string description,uint value,address recipient) public restricted{
        Request memory newRequest = Request({
           description:description,
           value:value,
           recipient:recipient,
           complete:false,
           approvalCount:0
        });
        requests.push(newRequest);
    }
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > (approversCount/2));
        request.recipient.transfer(request.value);
        request.complete = true;
    }
    function getSummary() public view returns (uint,uint,uint,uint,address){
      return (
        minimumContribution,this.balance,requests.length,approversCount,manager
        );
    }
    function getRequestsCount() public view returns (uint){
      return requests.length;
    }
    function checkApproval(address sender,uint index) public view returns (bool){
      Request storage request = requests[index];
      return request.approvals[sender];
    }
}
