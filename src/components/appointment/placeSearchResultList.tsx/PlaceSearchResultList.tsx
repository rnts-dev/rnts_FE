import { Button, Stack } from '@chakra-ui/react';

interface PlaceSearchResultList {
  result: any;
  handleSelectDestination: any;
}

export const PlaceSearchResultList = (props: PlaceSearchResultList) => {
  const { result, handleSelectDestination } = props;
  return (
    <>
      {result?.length ? (
        <Stack spacing={3}>
          {result?.map((e: any) => (
            <Button
              size="md"
              onClick={() => handleSelectDestination(e.address_name)}
              _hover={{ bg: '#ebedf0' }}
              _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
              }}
              _focus={{
                boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
              }}>
              {e.address_name}
            </Button>
          ))}
        </Stack>
      ) : (
        ''
      )}
    </>
  );
};
