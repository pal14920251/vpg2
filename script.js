function debitLove100() {
    const email = document.getElementById('email').value;
    const transaction = document.getElementById('transaction').value;
    if (email && transaction) {
      document.getElementById('thankYou').style.display = 'block';
    } else {
      alert('Please fill all required fields.');
    }
  }
