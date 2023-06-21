import { Card, Flex, Text, Title } from '@tremor/react';
import React from 'react';
import { Check, ExternalLink, X } from 'lucide-react';
import Link from 'next/link';

interface IAppCreateProviderCardProps {
  provider: string;
  icon: React.ReactNode;
  profile: string;
  profileUrl: string;
  repositories: number;
  editScopeUrl: string;
  connected: boolean;
}

export function AppCreateProviderCard(props: IAppCreateProviderCardProps) {
  return (
    <Card className="p-3 border-1 border-cat-overlay1 ring-0">
      <Flex justifyContent="start" alignItems="stretch" flexDirection="col">
        <Flex>
          {props.icon}
          <Title className="text-cat-text text-2xl ml-2 mr-auto">
            {props.provider}
          </Title>
          {props.connected ? (
            <Check className="w-5 h-5 text-cat-green" />
          ) : (
            <X className="w-5 h-5 text-cat-red" />
          )}
        </Flex>
        <Flex
          justifyContent="start"
          alignItems="stretch"
          flexDirection="col"
          className="mt-4 gap-1"
        >
          <Flex
            justifyContent="start"
            alignItems="center"
            flexDirection="row"
            className="gap-2"
          >
            <Link
              href={props.profileUrl}
              className="text-cat-text hover:underline"
            >
              {props.profile}
            </Link>
            <ExternalLink className="w-4 h-4 text-cat-text" />
          </Flex>
          <Text className="text-cat-overlay1">
            <span className="font-bold">{props.repositories}</span>
            <span> repositories</span>
          </Text>
          <Link
            href={props.editScopeUrl}
            className="text-cat-blue hover:underline"
          >
            Edit scope
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
}
