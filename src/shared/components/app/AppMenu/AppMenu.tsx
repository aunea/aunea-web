import {MainMenu, MainMenuItem}  from "@aunea/ui-layout";
import './app-menu.css'
export function AppMenu() {
    return (
        <MainMenu className="header-main-menu"
                  left={"AUNE-A"}
                  center={
                      (
                          <>
                              <MainMenuItem label="Home" active/>
                              <MainMenuItem label="Body metrics"/>
                              <MainMenuItem label="Settings"/>
                          </>
                      ) as React.ReactNode
                  }
                  right={"TOGGLE"}
        />
    )
}
