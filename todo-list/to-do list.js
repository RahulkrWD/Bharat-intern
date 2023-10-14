const activeTasksList = document.getElementById("activeTasks");
const completedTasksList = document.getElementById("completedTasks");
const taskInput = document.getElementById("taskInput");

function getCurrentDateTime() {
  const now = new Date();
  const dateOptions = { year: "numeric", month: "short", day: "numeric" };
  const timeOptions = { hour: "numeric", minute: "numeric" };
  const date = now.toLocaleDateString("en-US", dateOptions);
  const time = now.toLocaleTimeString("en-US", timeOptions);
  return `${date}, ${time}`;
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = toggleTask;
    const label = document.createElement("label");
    label.textContent = taskText;
    const dateTime = document.createElement("span");
    dateTime.textContent = getCurrentDateTime();
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(dateTime);
    activeTasksList.appendChild(li);
    taskInput.value = "";
  }
}

function toggleTask() {
  const listItem = this.parentElement;
  if (this.checked) {
    completedTasksList.appendChild(listItem);
    listItem.classList.add("completed");
  } else {
    activeTasksList.appendChild(listItem);
    listItem.classList.remove("completed");
  }
}

// <!-- Code injected by live-server -->
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
        