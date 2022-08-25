import { useQuasar } from 'quasar';
import { ResponseStatus } from '../shared/models/tablesExecucio.model';

const useNotificationMessage = () => {
  const $q = useQuasar();

  const showNotificationMessage = (type, message, caption) => {
    $q.notify({
      color: type === ResponseStatus.SUCCESS ? 'green-4' : 'red-4',
      textColor: 'white',
      icon: type === ResponseStatus.SUCCESS ? 'cloud_done' : 'announcement',
      message: message, // Principal message
      caption: caption, // Secondary message
    });
  };

  return {
    showNotificationMessage,
  };
};

export default useNotificationMessage;
