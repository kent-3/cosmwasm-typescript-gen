/**
* This file was automatically generated by cosmwasm-typescript-gen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { useQuery, UseQueryOptions } from "react-query";
import { Addr, PaymentInfo, Uint128, ConfigResponse, ExecuteMsg, Binary, Cw20ReceiveMsg, GetRegistrationResponse, Registration, InfoForCodeIdResponse, InstantiateMsg, ListRegistrationsResponse, QueryMsg, ReceiveMsg } from "./CwCodeIdRegistryContract";
import { CwCodeIdRegistryQueryClient } from "./CwCodeIdRegistryContract.ts";
export interface CwCodeIdRegistryListRegistrationsQuery {
  client: CwCodeIdRegistryQueryClient;
  options?: UseQueryOptions<ListRegistrationsResponse, Error, ListRegistrationsResponse, (string | undefined)[]>;
  args: {
    chainId: string;
    name: string;
  };
}
export function useCwCodeIdRegistryListRegistrationsQuery({
  client,
  args,
  options
}: CwCodeIdRegistryListRegistrationsQuery) {
  return useQuery<ListRegistrationsResponse, Error, ListRegistrationsResponse, (string | undefined)[]>(["cwCodeIdRegistryListRegistrations", client.contractAddress], () => client.listRegistrations({
    chainId: args.chainId,
    name: args.name
  }), options);
}
export interface CwCodeIdRegistryInfoForCodeIdQuery {
  client: CwCodeIdRegistryQueryClient;
  options?: UseQueryOptions<InfoForCodeIdResponse, Error, InfoForCodeIdResponse, (string | undefined)[]>;
  args: {
    chainId: string;
    codeId: number;
  };
}
export function useCwCodeIdRegistryInfoForCodeIdQuery({
  client,
  args,
  options
}: CwCodeIdRegistryInfoForCodeIdQuery) {
  return useQuery<InfoForCodeIdResponse, Error, InfoForCodeIdResponse, (string | undefined)[]>(["cwCodeIdRegistryInfoForCodeId", client.contractAddress], () => client.infoForCodeId({
    chainId: args.chainId,
    codeId: args.codeId
  }), options);
}
export interface CwCodeIdRegistryGetRegistrationQuery {
  client: CwCodeIdRegistryQueryClient;
  options?: UseQueryOptions<GetRegistrationResponse, Error, GetRegistrationResponse, (string | undefined)[]>;
  args: {
    chainId: string;
    name: string;
    version?: string;
  };
}
export function useCwCodeIdRegistryGetRegistrationQuery({
  client,
  args,
  options
}: CwCodeIdRegistryGetRegistrationQuery) {
  return useQuery<GetRegistrationResponse, Error, GetRegistrationResponse, (string | undefined)[]>(["cwCodeIdRegistryGetRegistration", client.contractAddress], () => client.getRegistration({
    chainId: args.chainId,
    name: args.name,
    version: args.version
  }), options);
}
export interface CwCodeIdRegistryConfigQuery {
  client: CwCodeIdRegistryQueryClient;
  options?: UseQueryOptions<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>;
}
export function useCwCodeIdRegistryConfigQuery({
  client,
  options
}: CwCodeIdRegistryConfigQuery) {
  return useQuery<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>(["cwCodeIdRegistryConfig", client.contractAddress], () => client.config(), options);
}