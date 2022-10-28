$(document).ready(function () {
  $(document).on('DOMContentLoaded', function () {
    // Request desktop notifications permission on page load

    if (!Notification) {
      return;
    }

    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  });

  function showNotification() {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else {
      const options = {
        body: '공부는 언제 할거야?',
        dir: 'ltr',
        image: '',
      };
      const notification = new Notification('아즈사 알림', options);

      notification.onclick = function () {
        window.open('https://www.google.com');
      };
    }
  }

  $('#btn-show-notification').on('click', showNotification);
});
