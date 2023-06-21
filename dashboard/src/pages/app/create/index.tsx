import React from 'react';
import { Card, Flex, Text, Title } from '@tremor/react';
import { type NextPage } from 'next';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import TextInput from '~/components/base/text-input';
import { useRepositories } from '~/components/app/create/hooks/useRepositories';
import { AppCreateList } from '~/components/app/create/app-create-list';
import { AppCreateProviderSelect } from '~/components/app/create/app-create-provider-select';

const providers = ['GitHub', 'GitLab', 'Bitbucket'];

const Create: NextPage = () => {
  const {
    sortedRepos,
    selectedProvider,
    setSelectedProvider,
    searchRepository,
    setSearchRepository
  } = useRepositories();

  return (
    <Flex justifyContent="center" alignItems="center" className="h-full w-full">
      <div className="mx-auto px-4">
        <Flex
          justifyContent="center"
          alignItems="start"
          flexDirection="col"
          className="h-full w-full my-12"
        >
          <text className="text-cat-text text-3xl">Create a new app</text>
          <Text className="text-cat-subtext0">
            Import a git repository from providers like Github, Gitlab, or
            Bitbucket.
          </Text>
        </Flex>
        <Card className="border-cat-overlay1 border-1 rounded-lg w-full h-full min-w-96 ring-0">
          <Title className="text-cat-text text-4xl">
            Import Git Repository
          </Title>
          <div className="tbwrap mt-4 flex">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 mt-1">
                <AppCreateProviderSelect
                  setProvider={setSelectedProvider}
                  selectedProvider={selectedProvider}
                  providers={providers}
                />
                <TextInput
                  placeholder="Search repositories..."
                  icon={MagnifyingGlassIcon}
                  color="pink"
                  className="w-full h-full"
                  onChange={(e) => setSearchRepository(e.target.value)}
                />
              </div>
              <AppCreateList repos={sortedRepos} />
            </div>
          </div>
        </Card>
      </div>
    </Flex>
  );
};

export default Create;
