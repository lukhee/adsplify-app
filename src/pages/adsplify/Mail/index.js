import { useEffect } from 'react';
// @mui
import { Card, Container, Box } from '@mui/material';
// redux
import { useDispatch } from '../../../redux/store';
import { getConversations, getContacts } from '../../../redux/slices/chat';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import { ChatSidebar, ChatWindow } from '../../../sections/@dashboard/chat';

// ----------------------------------------------------------------------

export default function Chat() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Box sx={{ mt: 5 }}>
      <Page title="Chat">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Card sx={{ height: '72vh', display: 'flex' }}>
            <ChatSidebar />
            <ChatWindow />
          </Card>
        </Container>
      </Page>
    </Box>
  );
}
