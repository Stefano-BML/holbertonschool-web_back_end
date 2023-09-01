#!/usr/bin/env python3
"""
Mixed lists
"""
from typing import Union, List


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Float base in int or float numbers
    """

    result: float = 0

    for x in mxd_lst:
        result += x

    return result
