<script>
    function openModal(title, info) {
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalInfo').innerText = info;
        document.getElementById('unitModal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('unitModal').style.display = 'none';
    }
</script>
