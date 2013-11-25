// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
    chrome.tabs.executeScript(null,
        {code:"document.body.style.backgroundColor='" + e.target.id + "'"});

    var javascript = "document.getElementById('lst-ib').value='" + e.target.id + "';"
    chrome.tabs.executeScript(null, {code:javascript});
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    $('.btn2').bind('click', click);
});