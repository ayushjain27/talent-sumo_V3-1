import React from 'react';

const AudioModal = () => {
  return (
    <>
      <div className="modal fade" id="audioModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Response Audio</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <audio controls preload="none">
                  <source src="https://pwdown.com/10203/Yeh Ishq Hai - Rangoon (Arijit Singh) 320Kbps.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-dark">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AudioModal
