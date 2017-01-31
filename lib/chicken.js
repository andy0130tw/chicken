// synopsis:
//              (input  , code   ): direct call
//              (index  , 0      ): first internal call, called at beginning of a line
//              (index           ): successive internal call
//              (                ): ending internal call
function chicken(CHICKEN, Chicken) {
  // --------------- Prologue ---------------
  // if the function is called directly (`code` exists),
  // do the parsing job and execute itself recursively
  Chicken && (
    // parsing
    // the environment is attached to the function itself
    //   `.chicken`:  the stack
    //   `.Chicken`:  either the code or the output
    //   `.CHICKEN`:  the stack pointer
    //   `.$Chicken`: the input pointer
    chicken.chicken = [
      // 0th - placeholder of error message
      ,
      // 1st - input
      CHICKEN,
      // 2nd - the top of the stack
      // save the code to `chicken.Chicken`
      // then reuse `CHICKEN` to store the state
      //      and set all other stuffs to 0

      // NOTE: the code will breaak when the code and the input is the same!!
      // but if we regard the condition is an injection
      // then the expression is indeed zero
      CHICKEN = Chicken = chicken.$Chicken = -( CHICKEN == ( chicken.Chicken = Chicken ) )
    ],

    // set the 0th item to reference the stack itself
    // if a syntax error occurs,
    // then the field will be replaced to that message
    chicken.chicken[Chicken++] = chicken.chicken,
    // initiate the stack pointer to 2
    chicken.CHICKEN = ++Chicken,
    // start parsing the program
    chicken(--Chicken),
    // set the input pointer to 2, the stack pointer
    chicken.$Chicken = ++Chicken,
    // increment the stack pointer and be ready to run the program
    // from the top-most stack frame
    chicken.CHICKEN++
  );

  // consume a number from stack and interpret it
  // it is either from input or from the code,
  // depending on the input pointer
  Chicken = chicken.Chicken[chicken.$Chicken++];
  // increment input counter

  // the operation is depending on whether the function
  // is called as ending call (by the first argument)
  //
  //   * if it is called directly, (CHICKEN is truthy)
  //     then read code, get it parsed and continue recursively
  //     where `Chicken` is from the code
  //   * if it is called as ending call, (CHICKEN is 0 or undefined)
  //     then run the instruction
  //     where `Chicken` is from the stack
  chicken.Chicken = CHICKEN ?
    // --------------- Parsing ---------------
    // if undefined, we are reading past the end of the code
    Chicken ?
      // `\n`, if there is no tokens left in the current line
      '\012' == Chicken ?
        // pass the second argument indicating the first call of line
        // but not confused with the direct call (since it's zero and is falsy)
        chicken(++CHICKEN, chicken.chicken[++chicken.CHICKEN] = CHICKEN - CHICKEN)
      :
        // check if we meet the separator...
        Chicken == ' ' |
        // ignoring any `\r` (for compatibility with Windows),
        '\015' == Chicken ||
        // or a token `chicken`
        (Chicken) == "c" &
        chicken.Chicken[chicken.$Chicken++] == "h" &
        chicken.Chicken[chicken.$Chicken++] == "i" &
        chicken.Chicken[chicken.$Chicken++] == "c" &
        chicken.Chicken[chicken.$Chicken++] == "k" &
        chicken.Chicken[chicken.$Chicken++] == "e" &
        chicken.Chicken[chicken.$Chicken++] == "n" &&
        // increment the current number of chicken
        // for a successful read
        ++chicken.chicken[chicken.CHICKEN] ?
          // if it is, continue reading
          chicken(CHICKEN)
        :
          // if not, stop reading,
          // clear the stack and output
          [
            // throw an error
            "Error on line " + CHICKEN + ": expected 'chicken'",
            // set the line number to `-1` as an exception
            chicken.CHICKEN = (CHICKEN++) - CHICKEN
          ]
    :
    chicken.chicken

  : (
  // --------------- Running instruction ---------------
    CHICKEN = chicken.Chicken[chicken.CHICKEN],
    Chicken ? (
      Chicken =
        --Chicken? --Chicken? --Chicken? --Chicken? --Chicken?
        --Chicken? --Chicken? --Chicken? --Chicken?
      // n (n > 9), push (n - 10)
      chicken.CHICKEN++ && --Chicken:
      // 9, BBQ
      '&#' + CHICKEN + ';':
      // 8, fr
      chicken.Chicken[
        chicken.Chicken[--chicken.CHICKEN] &&
        (chicken. $Chicken += CHICKEN),
        --chicken.CHICKEN
      ]:
      // 7, peck
      chicken.Chicken[
        chicken.Chicken[CHICKEN] = chicken.Chicken[--chicken.CHICKEN],
        --chicken.CHICKEN
      ]:
      // 6, pick
      chicken.Chicken[chicken.Chicken[chicken.$Chicken++]][CHICKEN]:
      // 5, compare
      CHICKEN == chicken.Chicken[--chicken.CHICKEN]:
      // 4, rooster
      CHICKEN * chicken.Chicken[--chicken.CHICKEN]:
      // 3, fox
      chicken.Chicken[--chicken.CHICKEN] - CHICKEN:
      // 2, add
      chicken.Chicken[--chicken.CHICKEN] + CHICKEN:
      // 1, chicken
      chicken.CHICKEN++ && "chicken",

    // store the result
    chicken.Chicken[chicken.CHICKEN] = Chicken,
    // moving to next instruction
    chicken()
    )
    :
    // 0, axe
    CHICKEN
    );

  // return the output string
  return chicken.Chicken;
}

module.exports = chicken;
