var mrpc = function(url) {
    function proxy(url) {
        this.url = url;
        this.rpc = function rpc(path, procedure, value) {
            var data = {
                path: path,
                procedure: procedure,
                value: value
            };
            return $.ajax({
                url: url,
                dataType: "json",
                contentType: "application/json",
                method: "POST",
                data: JSON.stringify(data),
                error: function(error) {
                    console.log(error)
                }
            });
        }
    }
    return new proxy("{{ url_for("mrpc.rpc")}}");
}