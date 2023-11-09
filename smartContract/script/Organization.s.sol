// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/OrganizationFactory.sol";
import {BetaToken} from "../src/BetaToken.sol";

contract OrganizationScript is Script {
    OrganizationFactory _OrganizationFactory;
    BetaToken _BetaToken;

    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        _OrganizationFactory = new OrganizationFactory();
        _BetaToken = new BetaToken();
        _OrganizationFactory.createOrganization(
            "Beta Vest",
            "BVT",
            100000 * 10 ** 18,
            address(_BetaToken)
        );
        vm.stopBroadcast();
    }
}
